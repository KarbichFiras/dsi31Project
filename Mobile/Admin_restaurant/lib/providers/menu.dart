import 'package:flutter/foundation.dart';

import 'food.dart';

class Menu extends ChangeNotifier {

  String id;
  String title;
  String description;
  String imageUrl;
  List<Food> foods;
  bool isFavorite;

  Menu({
    required this.id,
    required this.title,
    required this.description,
    required this.imageUrl,
    required this.foods,
    this.isFavorite = false,
  });

  toggleFavoriteData(){
    isFavorite = !isFavorite;
    notifyListeners();
  }

}
