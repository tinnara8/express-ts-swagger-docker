import { Get, Route,Example } from 'tsoa';
import {Product} from '../models/product'
import pool from '../db/dbconnector';

@Route('Product')
export class ProductController {
    @Get('')
    @Example<Product>({
        id: 1,
        prodCode: 'string',
        barcode: 'string',
        nameEN: 'string',
        nameTH: 'string',
        stockAmt: 'string',
        weight: 'string',
        payType: 'string',
        prodType: 'string',
        pic: 'string',
        tag: 'string',
        prodDesc: 'string',
        unitcount: 'string',
        createdAt: new Date()
      })
    public async getProducts(): Promise<Product> {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM Product";
            const { rows } = await client.query(sql);
            const data = rows;

            client.release();

            // res.send(todos);
            return data
        } catch (error) {
            // res.status(400).send(error);
            return error
        }
    }
}

// export default ProductController;