import './Catalog.css'
import Card from '../../components/Card/Card'
import {catalog} from '../../data.js'
import { useState } from 'react'


export default function CatalogPage(){

    const[query,setQuery] = useState("")
    const[sorting,setSorting] = useState("")

    const filterProduct = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    function search (e){
        setQuery(e.target.value)
    }

    function sort(event) {
        const sortValue = event.target.value
        setSorting(sortValue);
    }

    const sortProducts = (sorting, catalog) => {
        switch(sorting){
            case 'price_asc':
                return [...catalog].sort((a,b) => a.price - b.price)
            case 'price_desc':
                return [...catalog].sort((a,b) => b.price - a.price)
            case 'count_desc':
                return [...catalog].sort((a,b) => a.count - b.count)
            default:
                return catalog
        }
    }

    const sortAndFilterProduct = sortProducts(sorting,filterProduct)

    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                    <div className="nav-catalog">
                        <p className="nav-cat">Главная \ Каталог</p>
                    </div>
                    <input type="search" className='search-input' onChange={search} name="search" placeholder='Поиск'/>
                    <select className='sort' onChange={sort}>
                        <option value="price_asc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="count_desc">Остаток по количеству</option>
                    </select>
                    <div className="categories">
                        <a href="" className="categor-btn-active">Всё</a>
                        <a href="" className="categor-btn">Топ</a>
                        <a href="" className="categor-btn">Низ</a>
                        <a href="" className="categor-btn">Обувь</a>
                    </div>
                    <div className="catalog-catalog">
                        {
                            sortAndFilterProduct.length ?
                            sortAndFilterProduct.map((card,index) =>{
                                return(
                                    <Card key={index} {...card} />
                                )
                            })
                            :
                            <h2>По запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}