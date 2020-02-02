import { api } from '../../../api/api';

export const fetchAreas = () =>
  api(`areas`)
    .get()
    .then(resp => resp);

export const fetchAndSetAreas = (setter) => {
  fetchAreas()
    .then(resp => {
      setter(resp);
    })
    .catch(e => console.log(e));
};

export const createArea = (name, description, icon, isFavourite) =>
  api(`areas/create`)
    .post({
      name: name,
      description: description,
      icon: icon,
      is_favourite: isFavourite,
    })
    .then(resp => resp.data);

export const updateArea = (area, name, description, icon, isFavourite) =>
  api(`areas/${area.id}`)
    .patch({
      name: name,
      description: description,
      icon: icon,
      is_favourite: isFavourite,
    })
    .then(resp => resp.data);

export const deleteArea = (user, area) =>
  api(`areas/${area.id}`)
    .delete()
    .then(resp => resp.result);
