const apiKey = 'iNK4EXT0snN_1t_RSV8xEUtyO_CSrswX_6KXEyRPKISQYnl86-T3eM0-PygEOlVoJEEkqnkX5WRkmyB1N93KqFu_7Ek1RuVT4mTFIzX9LioW2FH3_wForiaMxAI0W3Yx';

const Yelp = {
  search(term, location, sortyBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
