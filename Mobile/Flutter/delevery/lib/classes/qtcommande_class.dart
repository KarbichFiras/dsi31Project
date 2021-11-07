class qtcommande{
  int _id;
  int _qtcommande;
  float _prixunitaire;

  qtcommande(this._id, this._qtcommande, this._prixunitaire);

  float get prixunitaire => _prixunitaire;

  set prixunitaire(float value) {
    _prixunitaire = value;
  }

  int get qtcommande => _qtcommande;

  set qtcommande(int value) {
    _qtcommande = value;
  }

  int get id => _id;

  set id(int value) {
    _id = value;
  }


}