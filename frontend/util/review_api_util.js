export const fetchReviews = () => (
    $.ajax({
        url: `/api/reviews`
    })
)

export const fetchReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: {review},

    })
)

export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
)

export const deleteReview = reviewId (
    $.ajax({
        method: 'DESTROY',
        url: `/api/reviews/${reviewId}`,
        data: reviewId
    })
)