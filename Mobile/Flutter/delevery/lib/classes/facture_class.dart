class facture{
  int _code;
  date _datefacturation;
  float _Total;
  String _modepaiment;
  int _codecommande;

  facture(this._code, this._datefacturation, this._Total, this._modepaiment,
      this._codecommande);

  int get codecommande => _codecommande;

  set codecommande(int value) {
    _codecommande = value;
  }

  String get modepaiment => _modepaiment;

  set modepaiment(String value) {
    _modepaiment = value;
  }

  float get Total => _Total;

  set Total(float value) {
    _Total = value;
  }

  date get datefacturation => _datefacturation;

  set datefacturation(date value) {
    _datefacturation = value;
  }

  int get code => _code;

  set code(int value) {
    _code = value;
  }


}