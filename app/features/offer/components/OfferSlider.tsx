import { observer } from "mobx-react-lite"
import { Box, Column, Row, IBoxProps, Center } from "native-base";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { translate } from "../../../i18n"
import { EduBody, EduHeading, EduShadow } from "../../../components";

const offers = [
  {
    key: "1",
    title: translate("introScreen.mess1"),
  },
  {
    key: "2",
    title: translate("introScreen.mess2"),
  },

  {
    key: "3",
    title: translate("introScreen.mess3"),
  },
  {
    key: "4",
    title: translate("introScreen.mess3"),
  },
];

interface OfferSliderProps extends IBoxProps { }

export const OfferSlider: FC<OfferSliderProps> = observer(function OfferSlider(_props) {

  return (
    <Box>
      <AppIntroSlider
        // style={{ paddingBottom: 8, paddingTop: 24 }}
        activeDotStyle={{ ...$dotBase, ...$activeDot }}
        renderItem={OfferCard}
        data={offers}
        dotStyle={$dotBase}
        showNextButton={false}
        showDoneButton={false}
      />
    </Box >
  )
})


export function OfferCard({ item }) {
  return (
    <Box
      height="full"
      width="full"
      paddingBottom="10"
      paddingTop="4"
      paddingLeft="6"
      paddingRight="6"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
    >
      <Center
        width="full"
        borderRadius="3xl"
        padding="8"
        backgroundColor="primary.500"
        style={$shadow}
      >
        <Column space="4" justifyContent="space-between">
          <Row space="4" justifyContent="space-between" >
            <Column space="2">
              <EduBody color="white" type="semibold" text="40% OFF" />
              <EduHeading preset="h4" color="white" numberOfLines={2} text="Today's Special" />
            </Column>
            <EduHeading preset="h1" color="white" numberOfLines={1} text="40%" />
          </Row>
          <EduBody
            color="white"
            sizeT="large"
            numberOfLines={2}
            text="Get a discount for every course order! Only valid for today!"
          />
        </Column>
      </Center>
    </Box>
  )
}

const $activeDot: ViewStyle = {
  width: 16, backgroundColor: "white",
}

const $dotBase: ViewStyle = {
  // marginBottom: 96,
  width: 4,
  height: 4,
  borderRadius: 100,
  marginHorizontal: 2,
  backgroundColor: "#E0E0E0",
}


const $shadow: ViewStyle = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 9,
  },
  shadowOpacity: 0.22,
  shadowRadius: 10.24,
  elevation: 12
}




