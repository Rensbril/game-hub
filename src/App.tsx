import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Session } from "@supabase/supabase-js";
import { useEffect, useReducer, useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import supabase from "./components/supabaseClient";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [session, sessionDispatch] = useReducer(authReducer, null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        sessionDispatch({
          type: "login",
          payload: session as Session,
        });
      }
    );

    return () => {
      authListener?.subscription.unsubscribe;
    };
  }, [session]);

  return (
    <>
      <AuthContext.Provider value={{ session, dispatch: sessionDispatch }}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`, // if wider than 1024px
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr ",
          }}
        >
          <GridItem area="nav">
            <NavBar
              onsearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenreId={gameQuery.genreId}
                onSelectGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genreId: genre.id })
                }
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading gameQuery={gameQuery} />
              <Flex marginBottom={5}>
                <Box marginRight={5}>
                  <PlatformSelector
                    selectedPlatformId={gameQuery.platformId}
                    onSelectPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platformId: platform.id })
                    }
                  />
                </Box>
                <SortSelector
                  sortorder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </AuthContext.Provider>
    </>
  );
}

export default App;
