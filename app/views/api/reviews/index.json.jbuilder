@reviews.each do |review|
    debugger
    json.set! review.id do 
        json.partial! 'review', review: review 
    end
end