class UsersController < ApplicationController
  def index   
  end

  def resume
  end

  def download
    send_file("#{Rails.root}/files/chrisdelauder.pdf",
              filename: "#chrisdelauder.pdf",
              type: "application/pdf")
  end

  def display
    send_file("#{Rails.root}/files/chrisdelauder.pdf",
              filename: "#chrisdelauder.pdf",
              disposition: 'inline',
              type: "application/pdf")
  end
end