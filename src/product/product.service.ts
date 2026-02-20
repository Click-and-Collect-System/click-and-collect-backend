import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../sequelize/models/product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product,
    ) { }

    // Alle Produkte abrufen
    async findAll() {
        return this.productModel.findAll();
    }

    // Nur verfügbare Produkte abrufen
    async findAvailable() {
        return this.productModel.findAll({ where: { available: true } });
    }

    // Produkte nach Kategorie filtern
    async findByCategory(category: string) {
        return this.productModel.findAll({
            where: { category, available: true }
        });
    }

    // Einzelnes Produkt abrufen
    async findOne(id: number) {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            throw new NotFoundException(`Produkt mit ID ${id} nicht gefunden.`);
        }
        return product;
    }
}
