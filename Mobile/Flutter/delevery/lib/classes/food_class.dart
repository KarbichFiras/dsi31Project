class food {
  int _codeFood;
  String _libelle;
  float _prix;
  String _categorie;
  String _type;
  int _restaurantId;

  food(this.codeFood, this.libelle, this.prix, this.categorie, this.type,
      this.restaurantId);

  int get restaurantId => _restaurantId;

  set restaurantId(int value) {
    _restaurantId = value;
  }

  String get type => _type;

  set type(String value) {
    _type = value;
  }

  String get categorie => _categorie;

  set categorie(String value) {
    _categorie = value;
  }

  float get prix => _prix;

  set prix(float value) {
    _prix = value;
  }

  String get libelle => _libelle;

  set libelle(String value) {
    _libelle = value;
  }

  int get codeFood => _codeFood;

  set codeFood(int value) {
    _codeFood = value;
  }


}