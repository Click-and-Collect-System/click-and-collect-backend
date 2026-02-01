import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Public } from '../auth/public.decorator';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    // Alle verfügbaren Produkte abrufen 
    @Public()
    @Get()
    findAvailable() {
        return this.productService.findAvailable();
    }

    // Produkte nach Kategorie filtern
    @Public()
    @Get('category/:category')
    findByCategory(@Param('category') category: string) {
        return this.productService.findByCategory(category);
    }

    // Einzelnes Produkt abrufen
    @Public()
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productService.findOne(id);
    }
}