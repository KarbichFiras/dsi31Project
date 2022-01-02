import 'package:flutter/material.dart';
import 'food.dart';

class Foods extends ChangeNotifier{

  List<Food> _items = [
    Food(
      id: 'f1',
      title: 'Burger',
      description: 'A Burger - A nice food!',
      price: 29.99,
      imageUrl:'',
    ),
    Food(
      id: 'f2',
      title: 'KFC',
      description: 'A nice pair of Food.',
      price: 59.99,
      imageUrl:'',
    ),
    Food(
      id: 'f3',
      title: 'Chicken Fry',
      description: 'A Chicken - A nice food!',
      price: 19.99,
      imageUrl:'',
    ),
    Food(
      id: 'f4',
      title: 'Pizza',
      description: 'A Pizza - A nice food!',
      price: 49.99,
     imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    ),
    Food(
      id: 'f5',
      title: 'Sandwich',
      description: 'A Sandwich - A good food.',
      price: 49.99,
      imageUrl:'',
    )
  ];

  List<Food> get items {
    return [..._items];
  }

  Food findById(String id) {
    return _items.firstWhere((prod) => prod.id == id);
  }

  void addFood(Food value) {
     _items.add(value);
    notifyListeners();
  }

  void updateFood(Food value){
    _items [_items.indexWhere((element) => element.id == value.id )] = value;
    notifyListeners();
  }

  void removeAFoodItem(String id){

    _items.removeAt(_items.indexWhere((element) => element.id == id));
    notifyListeners();
  }



}
