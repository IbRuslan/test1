import axios from "axios";


const instance = axios.create({
    baseURL: 'https://0e7b2c01e3ad5556.mokky.dev',
    withCredentials: true
})

export type Pizzas = {
	id: number;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}

export type GetPizzasType = {
    pizza: Pizzas[]
}


export const PizzaApi = {
    getPizzas() {
        return instance.get<GetPizzasType>('/items')
    }
}