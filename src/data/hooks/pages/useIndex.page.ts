import {useMemo, useState} from "react";
import {UserShortInterface} from "../../@types/UserInterface";
import {ValidationService} from "../../services/ValidationService";
import {ApiService} from "../../services/ApiService";


export default function useIndex() {
  const [cep, setCep] = useState(""),
    validCep = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(''),
    [isDone, setIsDone] = useState(false),
    [isLoading, setIsLoading] = useState(false),
    [results, setResults] = useState<UserShortInterface[]>([]),
    [restResults, setRestResults] = useState(0)
  ;

  const searchProfessionals = async (search: string) => {
    setIsDone(false);
    setIsLoading(true);
    setError('');

    try {
      console.log(`/api/professional-city?cep=${search.replace(/\D/g, '')}`)
      const {data} = await ApiService.get<{
        professionals: UserShortInterface[],
        rest_results: number
      }>(`/api/professional-city?cep=${search.replace(/\D/g, '')}`)

      setResults(data.professionals);
      setRestResults(data.rest_results);

      setIsDone(true);
      setIsLoading(false);
    } catch (e) {
      setError('CEP não encontrado');
      setIsLoading(false);
    }


  }

  return {
    cep,
    setCep,
    validCep,
    searchProfessionals,
    error,
    results,
    isDone,
    isLoading,
    restResults
  }
}