function  guerrier(nom, attack, defence, sante) {
    this.nom = nom;
    this.attack= attack;
    this.defence = defence;
    this.sante = sante;
    this.combat= function(santecible){  santecible=santecible-this.attack;
                                        return santecible;};
}
var gurier1 = new guerrier("gue1",20,80,100);
var gurier2 = new guerrier("gue2",40,90,100);
console.log("la vie de gurier1 est: "+ gurier2.combat(gurier1.sante));
console.log("la vie de gurier2 est: "+ gurier1.combat(gurier2.sante));



function magicien(nom, attack, defence, sante, mana) {
    this.nom = nom;
    this.attack= attack;
    this.defence = defence;
    this.sante = sante;
    this.mana=mana;
    this.combat= function(santecible,nom_Attaquee){ santecible=santecible-this.attack;
                                        
                                        console.log('le personnage qui attacque est: '+this.nom);
                                        console.log('le personnage qui est attacqué : '+nom_Attaquee);
                                        console.log('la  vie de peronnage est : '+santecible);

                                    };
    this.soin= function(){ if(this.mana>=10){ this.mana-=10;
    	                                                this.sante+=10;
                                                console.log("le magicien essaye de se soignier");
                                                console.log("son nouveau de vie est : "+ this.sante);

                                                         }

                             else{ console.log("pas assez de mana");}

                            };                                    
}
var monMagicien=new magicien("magicien_simplon", 90,50,100,10);
gurier1.combat(monMagicien.sante);
gurier2.combat(monMagicien.sante);

monMagicien.soin();
monMagicien.combat(gurier1.sante,gurier1.nom);