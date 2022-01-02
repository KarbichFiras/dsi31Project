import 'package:admin_restaurant/providers/menu.dart';
import 'package:flutter/material.dart';
import 'food.dart';

class Menus extends ChangeNotifier{

  final List<Menu> _mitems = [
    Menu(
      id: 'm5',
      title: 'Menu1',
      description: 'Menu1',
      foods :[
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
        )
      ],
      imageUrl:'',
    ),
    Menu(
      id: 'm5',
      title: 'Menu1',
      description: 'Menu1',
      foods :[
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
      ],
      imageUrl:'',
    ),
    Menu(
      id: 'm5',
      title: 'Menu1',
      description: 'Menu1',
      foods :[

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
      ],
      imageUrl:'',
    ),
    Menu(
      id: 'm5',
      title: 'Menu1',
      description: 'Menu1',
      foods :[
        Food(
          id: 'f5',
          title: 'Sandwich',
          description: 'A Sandwich - A good food.',
          price: 49.99,
          imageUrl:'',
        )
      ],
      imageUrl:'',
    )
  ];

  List<Menu> get items {
    return [..._mitems];
  }

  Menu findById(String id) {
    return _mitems.firstWhere((prod) => prod.id == id);
  }

  void addMenu(Menu value) {
    _mitems.add(value);
    notifyListeners();
  }

  void updateMenu(Menu value){
    _mitems [_mitems.indexWhere((element) => element.id == value.id )] = value;
    notifyListeners();
  }

  void removeMenuItem(String id){

    _mitems.removeAt(_mitems.indexWhere((element) => element.id == id));
    notifyListeners();
  }



}
