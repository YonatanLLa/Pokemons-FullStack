const validation = (forms) => {
  let errors = {};
  let regex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+([a-zA-ZáéíóúñÁÉÍÓÚÑ]+)*$/;
  const regexMayus = /[A-Z]/;
  const wightRegex = /^(1|[1-9]?|10)$/;
  const heightRegex = /^(1|[1-9]?|10)$/;
  const typeRegex =
    /^(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy|unknown|shadow)$/;
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;


  if (!forms.image) {
    errors.image = "Ingresar imagen"
  }else if(!imageRegex.test(forms.image)){
    errors.image = "Ingresar imgen valido"
  }

  if (!forms.name) {
    errors.name = "ingres nombre de tu pokemon..";
  }  else if (!regex.test(forms.name)) {
    errors.name = "Nombre invaliod";
  }

  // ?Validacion del Name <--

  // ?Validacion del HP <--
  errors.hp =
    !forms.hp || forms.hp < 1
      ? "Tiene que tener hp"
      : forms.hp >= 1 && forms.hp <= 30
      ? "hp debil"
      : forms.hp > 30 && forms.hp <= 60
      ? "hp intermedio"
      : forms.hp > 60 && forms.hp <= 99
      ? "hp alta"
      : forms.hp > 99
      ? "hp al maximo"
      : "";
  // ?Validacion del HP <--

  // ?Validacion del ATTACK <--

  errors.attack =
    !forms.attack || forms.attack < 1
      ? "Tiene que tener attack"
      : forms.attack >= 1 && forms.attack <= 30
      ? "attack debil"
      : forms.attack > 30 && forms.attack <= 60
      ? "attack intermedio"
      : forms.attack > 60 && forms.attack <= 99
      ? "attack alta"
      : forms.attack > 99
      ? "attack al maximo"
      : "";

  // ?Validacion del ATTACK <--

  // ?Validacion del DEFENSE <--

  errors.defense =
    !forms.defense || forms.defense < 1
      ? "Tiene que tener defense"
      : forms.defense >= 1 && forms.defense <= 30
      ? "defense debil"
      : forms.defense > 30 && forms.defense <= 60
      ? "defense intermedio"
      : forms.defense > 60 && forms.defense <= 99
      ? "defense alta"
      : forms.defense > 99
      ? "defense al maximo"
      : "";

  // ?Validacion del DEFENSE <--

  //? Validacion del SPEED <--

  errors.speed =
    !forms.speed || forms.speed < 1
      ? "Tiene que tener speed"
      : forms.speed >= 1 && forms.speed <= 30
      ? "speed debil"
      : forms.speed > 30 && forms.speed <= 60
      ? "speed intermedio"
      : forms.speed > 60 && forms.speed <= 99
      ? "speed alta"
      : forms.speed > 99
      ? "speed al maximo"
      : "";

  //? Validacion del SPEED <--

  //? Validacion del HEIGHT

  errors.height = !forms.height
    ? "Tiene que tener Altura"
    : !wightRegex.test(forms.height)
    ? "La altura tiene que estar en 0 - 10m"
    : "";

  //? Validacion del HEIGHT

  errors.weight = !forms.weight
    ? "Tiene que tener Peso"
    : !heightRegex.test(forms.weight)
    ? "El peso tiene que estar en 0 - 10kg"
    : "";

    //? Validacion del TYPES:
  errors.types = !forms.types.length
    ?"Tienes que elegir algun tipo"
    : forms.types.length < 2
    ? "Tienes que elegir 2"
    :""    



  return errors;
};
export default validation;
