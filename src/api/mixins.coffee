findable =
  find: (id, cb) ->
    @get id, (error, response, body) =>
      if error
        cb error, body
      else
        @process_http_errors response, (error) =>
          if error
            cb error
          else
            @process_object body, (error, object) ->
              cb error, object

searchable =
  search: (opts, cb) ->
    console.log "Searchings with #{opts}"

deletable =
  delete: (id, cb) ->
    @del id, (error, response, body) =>
      if error
        cb error
      else
        @process_http_errors response, (error) ->
          cb error

module.exports =
  findable    : findable
  searchable  : searchable
  deletable   : deletable
