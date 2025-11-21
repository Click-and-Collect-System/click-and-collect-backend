import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('menu')
export class MenuController {


    private foods = [
        { id: 1, name: 'Käsekrainer', price: 3.50 },
        { id: 2, name: 'Leberkässemmel', price: 2.80 },
        { id: 3, name: 'Pizza-Snack', price: 2.50 },
        { id: 4, name: 'Schinken-Käse-Toast', price: 2.00 }
    ];

    @Get()
    getAllFoods() {
        return this.foods;
    }

    @Get(':id')
    getSingleFood(@Param('id') id: string) {
        return this.foods.find(food => food.id === Number(id));
    }

    @Post('order')
    orderFood(@Body() body: any) {
        const { foodId, amount } = body;

        const food = this.foods.find(f => f.id === foodId);

        if (!food) {
            return { success: false, message: 'Nicht gefunden!' };
        }

        return {
            success: true,
            message: 'Bestellung erhalten',
            item: food,
            amount,
            totalPrice: amount * food.price
        };
    }
}
