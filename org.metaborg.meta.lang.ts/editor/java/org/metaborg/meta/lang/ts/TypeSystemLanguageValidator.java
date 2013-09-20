package org.metaborg.meta.lang.ts;

import org.strategoxt.imp.runtime.dynamicloading.Descriptor;
import org.strategoxt.imp.runtime.services.MetaFileLanguageValidator;

public class TypeSystemLanguageValidator extends MetaFileLanguageValidator 
{ 
  @Override public Descriptor getDescriptor()
  { 
    return TypeSystemLanguageParseController.getDescriptor();
  }
}