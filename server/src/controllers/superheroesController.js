import {
  createSuperheroService,
  getSuperheroesService,
  getSuperheroByIdService,
  updateSuperheroService,
  deleteSuperheroService,
} from "../services/superheroesService.js";

export async function createSuperhero(req, res) {
  if (!req.body.nickname) {
    return res.status(400).json({ message: "Nickname is required" });
  }
  const superhero = await createSuperheroService(req.body, req.files);
  res.status(201).json(superhero);
}

export async function getSuperheroes(req, res) {
  const page = parseInt(req.query.page) || 1;
  const take = parseInt(req.query.take) || 5;
  const result = await getSuperheroesService(page, take);
  res.json(result);
}

export async function getSuperheroById(req, res) {
  const superhero = await getSuperheroByIdService(Number(req.params.id));
  res.json(superhero);
}

export async function updateSuperhero(req, res) {
  const updatedHero = await updateSuperheroService(
    Number(req.params.id),
    req.body,
    req.files
  );
  res.json(updatedHero);
}

export async function deleteSuperhero(req, res) {
  const result = await deleteSuperheroService(Number(req.params.id));
  res.json(result);
}
