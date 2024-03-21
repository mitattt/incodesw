import {IAPIResponse, IFullPerson, IPerson, IPlanet, ISpecie} from '~types';

const BASE_URL = 'https://swapi.py4e.com/api/';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const fullUrl = url.startsWith('http') ? url : BASE_URL + url;
  const options: RequestInit = {method};
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }
  const response = await fetch(fullUrl, options);
  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};

const getPersonDetails = async (character: IPerson): Promise<IFullPerson> => {
  let speciesData: ISpecie | undefined;
  let planetData: IPlanet | undefined;

  if (character.species.length > 0) {
    try {
      const speciesUrl = character.species[0];
      speciesData = await client.get<ISpecie>(speciesUrl);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  if (character.homeworld.length > 0) {
    try {
      const planetUrl = character.homeworld;
      planetData = await client.get<IPlanet>(planetUrl);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return {
    ...character,
    species: speciesData as ISpecie,
    homeworld: planetData as IPlanet,
  };
};

export const getAllPeople = async (page: number) => {
  const peopleResponse: IAPIResponse<IPerson> = await client.get(
    `people?page=${page}`,
  );

  const detailedPeople = await Promise.all(
    peopleResponse.results.map(character => getPersonDetails(character)),
  );

  return {
    count: peopleResponse.count,
    next: peopleResponse.next,
    previous: peopleResponse.previous,
    results: detailedPeople,
  };
};
