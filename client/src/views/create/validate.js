const validate = ((input) => {
    let errors = {};

    if (!input.name || !input.name[0].trim()) {
        errors.name = "El nombre es obligatorio";
    }

    if (!input.name || !input.name[0].trim()) {
        errors.type = "Debes seleccionar al menos un tipo";
    }

    if (!input.image || !input.image[0].trim()) {
        errors.image = "Debe ingresar un link de imagen";
    } 

    if (!input.life || !input.life[0].trim()) {
        errors.life = "El campo life no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.life)) {
        errors.life = "El campo no es válido";
    }

    if (!input.attack || !input.attack[0].trim()) {
        errors.attack = "El campo attack no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.attack)) {
        errors.attack = "El campo no es válido";
    }

    if (!input.defense || !input.defense[0].trim()) {
        errors.defense = "El campo defense no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.defense)) {
        errors.defense = "El campo no es válido";
    }

    if (!input.speed || !input.speed[0].trim()) {
        errors.speed = "El campo speed no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.speed)) {
        errors.speed = "El campo no es válido";
    }

    if (!input.height || !input.height[0].trim()) {
        errors.height = "El campo height no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.height)) {
        errors.height = "El campo no es válido";
    }

    if (!input.weight || !input.weight[0].trim()) {
        errors.weight = "El campo weight no puede estar vacio";
    } else if (!/^[0-9\b]+$/.test(input.weight)) {
        errors.weight = "El campo no es válido";
    }

    return errors;
});


export default validate;