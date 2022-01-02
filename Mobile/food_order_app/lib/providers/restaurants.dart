import 'package:flutter/material.dart';
import 'restaurant.dart';

class Restaurants extends ChangeNotifier{

  List<Restaurant> _items = [
    Restaurant(
      id: 'r1',
      title: 'PlanB',
      description: 'some description',
        imageUrl:"assets/images/planb.jpg"

    ),
    Restaurant(
      id: 'r2',
      title: 'Dinapoli',
      description: 'some description',
        imageUrl:"assets/images/dinapoli.jpg"
    ),
    Restaurant(
      id: 'r3',
      title: ' Bedouin',
      description: 'some description',
        imageUrl:"assets/images/Bedouin.jpg"

    ),
    Restaurant(
      id: 'r4',
      title: 'le Quai',
      description: 'some description',
        imageUrl:"assets/images/lequia.jpg"

    ),


  ];

  List<Restaurant> get items {
    return [..._items];
  }

  Restaurant findById(String id) {
    return _items.firstWhere((prod) => prod.id == id);
  }

  void addRestaurant(Restaurant value) {
     _items.add(value);
    notifyListeners();
  }

  void updateRestaurant(Restaurant value){
    _items [_items.indexWhere((element) => element.id == value.id )] = value;
    notifyListeners();
  }

  void removeARestaurantItem(String id){

    _items.removeAt(_items.indexWhere((element) => element.id == id));
    notifyListeners();
  }



}
