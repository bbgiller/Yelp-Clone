export const fetchBusinesses = () => (
    $.ajax ({
        method: 'GET',
        url: 'api/businesses',
        error: (err) => console.log(err),
        
    })
);

export const fetchBusiness = businessId => (
    $.ajax ({
        method: 'GET',
        url: `api/businesses/${businessId}`,
    })
)