import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){

            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].cantidad = newList[productIndex].cantidad + qty;
            newList[productIndex].precioTotal = newList[productIndex].cantidad * newList[productIndex].precio;
            setProductCartList(newList)
        } else{
        
            const newProduct={...product, cantidad:qty, precioTotal: qty*product.precio}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.cantidad,0);
        return totalProducts;
    }

    const getTotalPrice = ()=>{
        const totalPriceProducts = productCartList.reduce((acc,item)=>acc + item.precioTotal,0);
        return totalPriceProducts;
    }


    return(
        <CartContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}