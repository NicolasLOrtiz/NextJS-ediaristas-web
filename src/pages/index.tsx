import type {NextPage} from 'next'
import SafeEnvironment
    from "../ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import UserInformation
    from "../ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "../ui/components/inputs/TextFieldMask/TextFieldMask";
import {Button, CircularProgress, Container, Typography} from '@mui/material';
import {
    FormElementsContainer,
    ProfessionalsContainer,
    ProfessionalsPaper
} from "@styles/pages/index.style";
import useIndex from "../data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    validCep,
    searchProfessionals,
    error,
    results,
    isDone,
    isLoading,
    restResults
  } = useIndex();

  return (
    <div>
      <SafeEnvironment/>
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"}
      />

      <Container>


        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={'error'}>{error}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{width: '220px'}}
            disabled={!validCep || isLoading}
            onClick={() => searchProfessionals(cep)}
          >
            {
              isLoading
                ? <CircularProgress size={20}/>
                : 'Buscar'
            }
          </Button>
        </FormElementsContainer>


        {
          isDone && (results.length > 0 ?
              <ProfessionalsPaper>
                <ProfessionalsContainer>

                  {results.map((item, index) => (
                    <UserInformation
                      key={index}
                      name={item.full_name}
                      picture={item.avatar}
                      rating={item.rating}
                      description={item.city}
                    />
                  ))}

                </ProfessionalsContainer>

                <Container sx={{textAlign: 'center'}}>
                  {
                    restResults > 0 && (
                      <Typography sx={{mt: 5}}>
                        ...e
                        mais {restResults} {restResults > 1 ? 'profissionais atendem' : 'profissional atende'} ao
                        seu
                        endereço.
                      </Typography>
                    )
                  }


                  <Button
                    variant={'contained'}
                    color={'secondary'}
                    sx={{mt: 5}}
                  >
                    Contratar um profissional
                  </Button>
                </Container>
              </ProfessionalsPaper>
              : (
                <Typography
                  align={'center'}
                  color={'textPrimary'}
                >
                  Ainda não temos nenhuma diarista disponível
                  em sua região
                </Typography>
              )
          )}
      </Container>
    </div>
  )
}

export default Home
