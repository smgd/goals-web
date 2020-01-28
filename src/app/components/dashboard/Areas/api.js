import { api } from '../../../api/api';

export const fetchAreas = user =>
  api(`${user.id}/areas`)
    .get()
    .then(resp => resp);

export const fetchAndSetAreas = (user, setter) => {
  fetchAreas(user)
    .then(resp => {
      setter(resp);
    })
    .catch(e => console.log(e));
};

export const createArea = (user, name, description, icon, isFavourite) =>
  api(`${user.id}/areas/create`)
    .post({
      name: name,
      description: description,
      icon: icon,
      is_favourite: isFavourite,
    })
    .then(resp => resp.data);

export const updateArea = (user, area, name, description, icon, isFavourite) =>
  api(`${user.id}/areas/${area.id}`)
    .patch({
      name: name,
      description: description,
      icon: icon,
      is_favourite: isFavourite,
    })
    .then(resp => resp.data);

export const deleteArea = (user, area) =>
  api(`${user.id}/areas/${area.id}`)
    .delete()
    .then(resp => resp.result);
