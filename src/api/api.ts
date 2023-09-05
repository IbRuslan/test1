import axios from "axios";
import {CategoriesType, SortType} from "../store/books-reducer";


const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
	params: {
		key: 'AIzaSyBRqmafvSVUByRtugHGCkQOsEfaw58VgzU'
	}
})

export type ResponseBooks = {
	kind: string;
	totalItems: number;
	items: BooksItem[];
}

export type BooksItem = {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: RootObjectVolumeInfo;
	saleInfo: RootObjectSaleInfo;
	accessInfo?: RootObjectAccessInfo;
	searchInfo: RootObjectSearchInfo;
}
export type RootObjectVolumeInfoIndustryIdentifiers = {
	type: string;
	identifier: string;
}
export type RootObjectVolumeInfoReadingModes = {
	text: boolean;
	image: boolean;
}
export type RootObjectVolumeInfoPanelizationSummary = {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}
export type RootObjectVolumeInfoImageLinks = {
	smallThumbnail: string;
	thumbnail: string;
}
export type RootObjectVolumeInfo = {
	title: string;
	subtitle: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: RootObjectVolumeInfoIndustryIdentifiers[];
	readingModes: RootObjectVolumeInfoReadingModes;
	pageCount: number;
	printType: string;
	categories: string[];
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: RootObjectVolumeInfoPanelizationSummary;
	imageLinks: RootObjectVolumeInfoImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
}
export type RootObjectSaleInfoListPrice = {
	amount: number;
	currencyCode: string;
}
export type RootObjectSaleInfoRetailPrice = {
	amount: number;
	currencyCode: string;
}
export type RootObjectSaleInfoOffersListPrice = {
	amountInMicros: number;
	currencyCode: string;
}
export type RootObjectSaleInfoOffersRetailPrice = {
	amountInMicros: number;
	currencyCode: string;
}
export type RootObjectSaleInfoOffers = {
	finskyOfferType: number;
	listPrice: RootObjectSaleInfoOffersListPrice;
	retailPrice: RootObjectSaleInfoOffersRetailPrice;
}
export type RootObjectSaleInfo = {
	country: string;
	saleability: string;
	isEbook: boolean;
	listPrice: RootObjectSaleInfoListPrice;
	retailPrice: RootObjectSaleInfoRetailPrice;
	buyLink: string;
	offers: RootObjectSaleInfoOffers[];
}
export type RootObjectAccessInfoEpub = {
	isAvailable: boolean;
}
export type RootObjectAccessInfoPdf = {
	isAvailable: boolean;
}
export type RootObjectAccessInfo = {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: RootObjectAccessInfoEpub;
	pdf: RootObjectAccessInfoPdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}
export type RootObjectSearchInfo = {
	textSnippet: string;
}


export const BooksApi = {
    getBooks(title:string) {
        return instance.get<ResponseBooks>(`volumes?q=intitle:${title}&startIndex=0&maxResults=30`)
    },
	getMoreBooks(title:string, number: number, categories: CategoriesType, sort: SortType) {
		return instance.get<ResponseBooks>(`volumes?q=intitle:${title}&orderBy=${sort}&startIndex=${number}&maxResults=30`)
	}
}