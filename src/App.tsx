import { Center, Divider, Heading } from "@chakra-ui/react";
import { Column, Row } from "./utils/chakraUtils";
import UserCard from "./components/UserCard";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import VRGDACard from "./components/VRGDACard";
import { useTime } from "./utils/useTime";
import { getVRGDAPrice } from "./utils/vrgda";
import { faker } from "@faker-js/faker";

export type Player = {
  balance: number;
  name: string;
  numOwned: { [key: string]: number };
};

export type VRGDA = {
  numSold: number;
  startTime: number;
  targetPrice: number;
  decayPercent: number;
  numPerHour: number;
  name: string;
};

function App() {
  const time = useTime();

  const [players, setPlayers] = useState<Player[]>([]);
  const [vrgdas, setVRGDAs] = useState<VRGDA[]>([]);

  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number>(0);

  const buy = (
    price: number,
    vrgdaIndex: number,
    selectedPlayerIndex: number
  ) => {
    let notEnoughCoins = false;

    setPlayers(
      players.map((player, i) => {
        if (selectedPlayerIndex == i) {
          if (price > player.balance) {
            alert("Not enough coins!");
            notEnoughCoins = true;
            return player;
          }

          const selectedVRGDAName = vrgdas[vrgdaIndex].name;

          return {
            ...player,
            balance: player.balance - price,
            numOwned: {
              ...player.numOwned,
              [selectedVRGDAName]:
                (player.numOwned[selectedVRGDAName] ?? 0) + 1,
            },
          };
        }

        return player;
      })
    );

    setVRGDAs(
      vrgdas.map((vrgda, i) => {
        if (vrgdaIndex == i && !notEnoughCoins) {
          return {
            ...vrgda,
            numSold: vrgda.numSold + 1,
          };
        }

        return vrgda;
      })
    );
  };

  return (
    <Column
      mainAxisAlignment="flex-start"
      crossAxisAlignment="flex-start"
      height="100vh"
      p={10}
    >
      <Heading>Players</Heading>
      <Row
        mt={5}
        mainAxisAlignment="flex-start"
        crossAxisAlignment="flex-start"
      >
        {players.map((player, i) => (
          <UserCard
            mr={5}
            player={player}
            onClick={() => setSelectedPlayerIndex(i)}
            cursor="pointer"
            boxShadow={selectedPlayerIndex == i ? "lg" : undefined}
          />
        ))}

        <Center
          p={5}
          borderRadius={6}
          borderColor="green.600"
          width="320px"
          height="100%"
          borderWidth="1px"
          cursor="pointer"
          onClick={() =>
            setPlayers([
              ...players,
              {
                name: prompt("Player Name?") || faker.name.fullName(),
                balance: parseInt(prompt("Starting balance?") || "100"),
                numOwned: {},
              },
            ])
          }
        >
          <AddIcon width="30px" height="30px" color="green.600" />
        </Center>
      </Row>

      <Heading mt={5}>Items</Heading>

      <Row
        mt={5}
        mainAxisAlignment="flex-start"
        crossAxisAlignment="flex-start"
      >
        {vrgdas.map((vrgda, i) => {
          const price = getVRGDAPrice(vrgda, time);

          return (
            <VRGDACard
              mr={5}
              vrgda={vrgda}
              price={price}
              onClick={() => buy(price, i, selectedPlayerIndex)}
              cursor="pointer"
            />
          );
        })}
        <Center
          p={5}
          borderRadius={6}
          borderColor="red.600"
          width="320px"
          height="100%"
          borderWidth="1px"
          cursor="pointer"
          onClick={() =>
            setVRGDAs([
              ...vrgdas,
              {
                name: prompt("Item Name?") || faker.vehicle.vehicle(),

                startTime: time,
                targetPrice: parseFloat(prompt("Target Price?") || "10"),
                decayPercent: parseFloat(prompt("Decay Percent?") || "0.5"),
                numPerHour: parseFloat(prompt("Num Per Hour?") || "10"),

                numSold: 0,
              },
            ])
          }
        >
          <AddIcon width="30px" height="30px" color="red.600" />
        </Center>
      </Row>
    </Column>
  );
}

export default App;
