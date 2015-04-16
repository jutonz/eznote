class User < ActiveRecord::Base
  has_many :notes
  has_secure_password

  before_save do self.email.downcase! end
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, uniqueness: { case_sensitive: false },
                    format:     { with: VALID_EMAIL_REGEX },
                    presencce:  true
  validates :password, lemgth: { minimum: 6 }
  validates :display_name, presence: true, length: { maximum: 50 }

  def logged_in?
    persisted?
  end

  def display_name
    read_attribute(:display_name) || 'Guest'
  end
end