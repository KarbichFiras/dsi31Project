import 'package:flutter/foundation.dart';

class Restaurant extends ChangeNotifier {

  String id;
  String title;
  String description;
  String imageUrl;
  bool isFavorite;

  Restaurant({
    required this.id,
    required this.title,
    required this.description,
    required this.imageUrl,
    this.isFavorite = false,
  });

  toggleFavoriteData(){
    isFavorite = !isFavorite;
    notifyListeners();
  }

}
