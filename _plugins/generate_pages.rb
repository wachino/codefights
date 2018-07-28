module Jekyll
  class StandardPage < Page
    def initialize(site, base, dir, name)
      super(site, base, dir, name)
      self.data['title'] = name
      self.data['permalink'] = dir if name == 'README.md'
      # @site = site
      # @base = base
      # @dir = dir
      # @name = name
      #
      # self.process(@name)
      # self.read_yaml(File.join(base, '_layouts'), 'category_index.html')
      # self.data['category'] = category
      #
      # category_title_prefix = site.config['category_title_prefix'] || 'Category: '
      # self.data['title'] = "#{category_title_prefix}#{category}"
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      static_files_to_remove = []

      site.static_files.each do |static_file|
        if static_file.name.end_with?('.md')
          dir = static_file.relative_path.gsub(static_file.name, '')
          site.pages << StandardPage.new(site, site.source, dir, static_file.name)
          static_files_to_remove << static_file
        end
      end

      static_files_to_remove.each do |static_file|
        site.static_files.delete(static_file)
      end
    end
  end
end