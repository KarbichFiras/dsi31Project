class personne{


  int _id;
  String _email;
  int _numtel;
  String _adresse;

  personne(this._id, this._email, this._numtel, this._adresse);

  String get adresse => _adresse;

  set adresse(String value) {
    _adresse = value;
  }

  int get numtel => _numtel;

  set numtel(int value) {
    _numtel = value;
  }

  String get email => _email;

  set email(String value) {
    _email = value;
  }

  int get id => _id;

  set id(int value) {
    _id = value;
  }
}