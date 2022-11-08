import { View } from "react-native";
import { Text } from "react-native-paper";
// or less ideally
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const Teste = () => (
    <View>

        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        <CarouselKaua />
    </View>
)




function CarouselKaua() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>lenda</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>lenda</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>lenda</h3>
                    
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

