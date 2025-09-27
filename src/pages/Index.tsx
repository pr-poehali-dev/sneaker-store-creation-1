import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');

  const sneakers = [
    {
      id: 1,
      name: 'Air Jordan Retro 1',
      brand: 'Nike',
      price: 12990,
      image: '/img/ae91a553-0527-4431-9e0e-c20e1b19598f.jpg',
      colors: ['red', 'black'],
      sizes: [40, 41, 42, 43, 44],
      description: 'Легендарные кроссовки для настоящих ценителей стиля'
    },
    {
      id: 2,
      name: 'Dunk Low Classic',
      brand: 'Nike',
      price: 8990,
      image: '/img/a5fd2b66-2cc9-4b8a-974d-22707a82a19d.jpg',
      colors: ['black', 'white'],
      sizes: [39, 40, 41, 42, 43],
      description: 'Минималистичный дизайн для повседневной носки'
    },
    {
      id: 3,
      name: 'Ultraboost 22',
      brand: 'Adidas',
      price: 15990,
      image: '/img/70d190cf-2761-471e-bac3-f00470bb36b6.jpg',
      colors: ['white'],
      sizes: [40, 41, 42, 43, 44, 45],
      description: 'Максимальный комфорт для активного образа жизни'
    }
  ];

  const brands = ['Nike', 'Adidas', 'Puma', 'New Balance'];

  const filteredSneakers = sneakers.filter(sneaker => {
    const matchesBrand = selectedBrand === 'all' || sneaker.brand === selectedBrand;
    const matchesPrice = sneaker.price >= priceRange[0] && sneaker.price <= priceRange[1];
    return matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={24} className="text-primary" />
              <h1 className="text-xl font-bold text-secondary">СПРИНТЕР</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Брендяжки</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Кроссокталог</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Доставляшка</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакташки</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Icon name="Search" size={20} className="text-gray-600 cursor-pointer hover:text-primary transition-colors" />
              <Icon name="ShoppingCart" size={20} className="text-gray-600 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in">
              Кроссовочная
              <span className="text-primary block">Революция! 👟</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Самые крутые лапти для твоих ножек. От классики до безумия!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-scale-in">
              Начать Шопиться! <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">Фильтруй как Хочешь! 🎯</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Брендяшки</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Выбери бренд" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все брендяшки</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Size Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Размерчик</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Размер ноги" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой размер</SelectItem>
                  {[39, 40, 41, 42, 43, 44, 45].map(size => (
                    <SelectItem key={size} value={size.toString()}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Цветастость</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Какой цвет?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все цвета радуги</SelectItem>
                  <SelectItem value="black">Чёрненький</SelectItem>
                  <SelectItem value="white">Беленький</SelectItem>
                  <SelectItem value="red">Красненький</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ценник: {priceRange[0]}₽ - {priceRange[1]}₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50000}
                min={0}
                step={1000}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-secondary mb-8">
            Наши Лапоточки ({filteredSneakers.length}) 👑
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSneakers.map((sneaker, index) => (
              <Card key={sneaker.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={sneaker.image} 
                    alt={sneaker.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">{sneaker.brand}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-2">{sneaker.name}</h4>
                  <p className="text-gray-600 mb-4">{sneaker.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{sneaker.price.toLocaleString()}₽</span>
                    <div className="flex space-x-1">
                      {sneaker.colors.map(color => (
                        <div 
                          key={color}
                          className={`w-4 h-4 rounded-full border-2 border-gray-200 ${
                            color === 'black' ? 'bg-black' : 
                            color === 'white' ? 'bg-white' : 
                            color === 'red' ? 'bg-red-500' : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {sneaker.sizes.slice(0, 4).map(size => (
                      <Badge key={size} variant="outline" className="text-xs">{size}</Badge>
                    ))}
                    {sneaker.sizes.length > 4 && (
                      <Badge variant="outline" className="text-xs">+{sneaker.sizes.length - 4}</Badge>
                    )}
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white group">
                    В Корзинку! 
                    <Icon name="ShoppingCart" size={16} className="ml-2 group-hover:animate-bounce-subtle" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">СПРИНТЕР</h4>
              <p className="text-gray-300">Самые крутые кроссовки для самых крутых ребят!</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Брендяшки</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Nike</li>
                <li>Adidas</li>
                <li>Puma</li>
                <li>New Balance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Инфа</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Доставляшка</li>
                <li>Возвратики</li>
                <li>Размерная Сетка</li>
                <li>Контакташки</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Соцсеточки</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 СПРИНТЕР. Все лапти защищены! 👟✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;