import{faker } from '@faker-js/faker';

export class RandomDataUtil {

    // Person

    static getFirstName(): string{
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getFullName(): string {
        return faker.person.fullName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getPhoneNumber(): string {
        return faker.phone.number();
    }

    static getUsername(): string {
        return faker.internet.username();
    }

    static getPassword(length:number =10): string {
        return faker.internet.password({ length});
    }

    static getCountry(): string {
        return faker.location.country();
    }

    static getState(): string {
        return faker.location.state();
    }

    static getCity(): string {
        return faker.location.city();
    }

    static getStreet(): string {
        return faker.location.street();
    }

    static getStreetAddress(): string {
        return faker.location.streetAddress();
    }

    static getZipCOde(): string {
        return faker.location.zipCode();
    }

    static getLattitude(): string {
        return faker.location.longitude().toString();
    }


    //Date & Time

    static getCurrentDate(): string {
        return faker.date.recent().toISOString().split('T')[0];
    }

    static getRecentDate(days: number =10): string {
        return faker.date.recent({ days }).toISOString().split('T')[0];
    }

    static getFutureDate(years: number=1): string {
        return faker.date.future({ years }).toISOString().split('T')[0];
    }    

    static getPastDates(years: number=1): string {
        return faker.date.past({ years }).toISOString().split('T')[0];
    }

    //Commerce

    static getProductName():string{
        return faker.commerce.productName()
    }

    static getProductDescription():string{
        return faker.commerce.productDescription()
    }

    
    static getProductPrice():string{
        return faker.commerce.price({ min: 1, max: 500, dec: 2});
    }

    static getDepartment():string{
        return faker.commerce.department()
    }
    
    static getImageUrl():string{
        return faker.image.url()
    }

    static getNumber():number{
        return faker.number.int({ min:1, max:999 });
    }


    //API Payload Generators

    static generateInvalidLoginPayload(){
        return{
            username: this.getUsername(),
            password: this.getPassword()
        };
    }



}
