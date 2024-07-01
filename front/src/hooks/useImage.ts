const images: { [key: number]: any } = {
  127: require('@assets/products/modelo-especial.png'),
  374: require('@assets/products/miller-lite.png'),
  743: require('@assets/products/corona.png'),
  841: require('@assets/products/lagunitas.jpg'),
  1001: require('@assets/products/budweiser.png'),
};

const useImage = (key: number) => {
  const image = images[key];
  return image;
};

export default useImage;
