get '/' do
  @images = []
  Pow(base_dir).files.each { |file| @images << file.name }
  @images.sort!
  haml :index
end