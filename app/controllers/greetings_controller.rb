class GreetingsController < ApplicationController
  # before_action :set_greeting, only: %i[show edit update destroy]

  def random
    # message = Greeting.where(id: rand(1..5))
    # render json: { greetings: message }
    random_number = 1 + rand(Greeting.count)
    @mesage = Greeting.find(random_number)
    render json: @mesage
  end
end
