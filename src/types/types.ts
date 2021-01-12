


export type ReviewsType = {
    id: number
    movieName: string
    movieReview: string
}

export type InitialType = {
    reviews: Array<ReviewsType>
}




// StateReducersType\\\\\\\\\\\\\\\\\\\



// ACTION TYPES/////////////////////////////////////


export type AddReviewActionType = {
    type: "ADD-REVIEW"
    name: string
    review: string
    reviewID: number
}


export type ActionTypes = AddReviewActionType