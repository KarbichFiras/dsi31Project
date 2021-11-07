class commande{
  int _codecommande;
  date _date;
  String _adresseliv;
  int _clientid;
  int _codefacture;

  int get codecommande => _codecommande;

  set codecommande(int value) {
    _codecommande = value;
  }


  commande(this._codecommande, this._date, this._adresseliv, this._clientid,
      this._codefacture);

  date get date => _date;

  int get codefacture => _codefacture;

  set codefacture(int value) {
    _codefacture = value;
  }

  int get clientid => _clientid;

  set clientid(int value) {
    _clientid = value;
  }

  String get adresseliv => _adresseliv;

  set adresseliv(String value) {
    _adresseliv = value;
  }

  set date(date value) {
    _date = value;
  }


}