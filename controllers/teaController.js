const path = require('path');
const { httpResponse } = require('codemaster');
const { Table, ErrorHandler, Access } = require('chinchay');
const HateoasGenerator = require('chinchay').Hateoas;
const Tea = require('../models/tea');

const errorHandler = new ErrorHandler();

const viewPath = '../views/tea';


const newElement = (req, res) => {
  Tea.new().then((result) => {
    delete result.id;
    delete result.created_at;
    delete result.updated_at;
    res.render(path.join(viewPath, 'create.ejs'), {
      result,
    });
  }).catch((error) => {
    res.render(path.join(viewPath, 'create.ejs'), {
      error,
      result: {},
    });
  });
};

const show = (req, res) => {
  Tea.findById(req.params.id).then((result) => {
    res.render(path.join(viewPath, 'show.ejs'), {
      result,
    });
  }).catch((error) => {
    res.render(path.join(viewPath, 'show.ejs'), {
      error,
      result: {},
    });
  });
};

const index = (req, res) => {
  Tea.find().then((results) => {
    res.render(path.join(viewPath, 'index.ejs'), {
      results,
    });
  }).catch((error) => {
    res.render(path.join(viewPath, 'index.ejs'), {
      error,
      results: [],
    });
  });
};

const edit = (req, res) => {
  Tea.findById(req.params.id).then((result) => {
    res.render(path.join(viewPath, 'edit.ejs'), {
      result,
    });
  }).catch((error) => {
    res.render(path.join(viewPath, 'edit.ejs'), {
      error,
      result: {},
    });
  });
};

// //////////// API ///////////////

const HATEOAS = new HateoasGenerator();
initializeHATEOAS();

function initializeHATEOAS() {
  HATEOAS.addLink('self', '/api/tea/:id');
  HATEOAS.addLink('edit', '/api/tea/:id/edit', 'POST');
  HATEOAS.addLink('delete', '/api/tea/:id/delete', 'DELETE');
  HATEOAS.addLink('new', '/api/tea/new', 'POST');
  HATEOAS.addLink('all', '/api/tea/find');
  HATEOAS.addLink('count', '/api/tea/count');
}

const create = (req, res) => {
  Tea.save(req.body).then((results) => {
    const json = httpResponse.success('Elemento guardado exitosamente', 'data', results);
    json.data.links = HATEOAS.get(results);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};

const template = (req, res) => {
  Tea.new().then((result) => {
    delete result.id;
    delete result.created_at;
    delete result.updated_at;
    const json = httpResponse.success('Elemento de template', 'data', result);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};

const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  Tea.update(id, req.body).then((results) => {
    const json = httpResponse.success('Elemento actualizado exitosamente', 'data', results);
    json.data.links = HATEOAS.get(results);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};

const del = (req, res) => {
  Tea.delete(req.params.id).then((results) => {
    const json = httpResponse.success('Elemento eliminado exitosamente', 'data', results);
    json.data.links = HATEOAS.get(results);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};


const find = (req, res) => {
  const userAccess = req.user.access || [];
  const options = Table.extractOptions(req.query);
  const columns = Table.extractColumns(req.query);
  let search = Table.extractSearch(req.query);
  search = Access.addAccessibleToSearch(search, userAccess, 'tea', 'id');
  Tea.find(search, columns, options).then((results) => {
    const json = httpResponse.success('Busqueda encontrada exitosamente', 'data', results);
    for (let i = 0; i < json.data.length; i++) {
      json.data[i].links = HATEOAS.get(json.data[i]);
    }
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};

const findById = (req, res) => {
  const options = Table.extractOptions(req.query);
  const columns = Table.extractColumns(req.query);
  Tea.findById(req.params.id, columns, options).then((results) => {
    const json = httpResponse.success('Busqueda encontrada exitosamente', 'data', results);
    json.data.links = HATEOAS.get(results);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};

const count = (req, res) => {
  const options = Table.extractOptions(req.query);
  const query = Table.extractSearch(req.query);
  Tea.count(query, options).then((results) => {
    const json = httpResponse.success('Busqueda encontrada exitosamente', 'data', results);
    return res.status(200).send(json);
  }).catch((error) => {
    const code = errorHandler.getHTTPCode(error);
    const message = errorHandler.getHTTPMessage(error);
    const json = httpResponse.error(message, error, code);
    return res.status(code).send(json);
  });
};


module.exports = {
  new: newElement,
  template,
  show,
  index,
  edit,
  create,
  find,
  findById,
  count,
  update,
  delete: del,
};
