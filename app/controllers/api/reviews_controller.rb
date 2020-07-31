class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        if @review.save
            render :show
        else 
            render json: @review.errors.full_messages, status: 422      
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show 
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :business_id)
    end
end
