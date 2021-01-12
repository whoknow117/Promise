import {ActionTypes, AddReviewActionType, InitialType, ReviewsType} from "../types/types";





let initialState: InitialType = {
    reviews: [
        {id: 1, movieName: "Довод",movieReview: "6 баллов"},
        {id: 2, movieName: "Чудо женщина 1984",movieReview: "Гавно"},
    ]
}

const addReviewAC = (name:string,review: string, reviewID: number):AddReviewActionType => {
    return {
        type: "ADD-REVIEW",
        name: name,
        review: review,
        reviewID: reviewID

    } as const
}




export const addReviewReducer = (state:InitialType = initialState, action:ActionTypes)=> {
        switch (action.type){
            case 'ADD-REVIEW': {
                let copyState = {...state}
                const newReview: ReviewsType = {
                    id: action.reviewID,
                    movieName: action.name,
                    movieReview: action.review,

                }
                return copyState;
            }
            default: {
                return state;
            }
        }
}