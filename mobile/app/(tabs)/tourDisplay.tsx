import TourDisplayComp from "@/components/TourComponents/TourDisplayComp";
import { View, Text, ScrollView } from "react-native";
import { exampleTour } from "@/components/TourComponents/TourDisplayComp.config";


export default function tourDisplay()
{
    return (
        <View>
            <ScrollView>
                <TourDisplayComp {...exampleTour} />
                <TourDisplayComp {...exampleTour} />
                <TourDisplayComp {...exampleTour} />
            </ScrollView>
        </View>
    )
}