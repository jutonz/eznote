class WelcomeController < ApplicationController
  before_action :set_user

  def index

  end

  private

  def set_user
    @current_user = current_user
  end
end
