interface Id {
    id: number;
}

interface Company extends Id {
    name: string
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address extends Id {
    street: string;
    city: string;
    geo: Geo
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    company: Company;
    address: Address;
}