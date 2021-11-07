class extras{
  int _codeExtra;
  String _name;
  float _prixUnitaire;

  extras(this._codeExtra, this._name, this._prixUnitaire);

  float get prixUnitaire => _prixUnitaire;

  set prixUnitaire(float value) {
    _prixUnitaire = value;
  }

  String get name => _name;

  set name(String value) {
    _name = value;
  }

  int get codeExtra => _codeExtra;

  set codeExtra(int value) {
    _codeExtra = value;
  }


}